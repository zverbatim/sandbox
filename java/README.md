Review of java docs
===================

## Docs:
https://docs.oracle.com/javase/tutorial/java/TOC.html

## Notes on java 8

### Lambdas

#### About 
lambda is a anonymous function-without name. hels to make code simpler.ideal for one time use.

before
```
public class MyRunnable implement Runnable{
	
	@Override
	pubic void run(){
		sout("hello");
	}	
}

MyRunnable r = new MyRunnable();
new Thread(r).start();

// or using anonymous class
new Thread( new Runnable(){
	@Override
	public void run(){
		sout("hello")
	}
})
```

with
```
Runnable r = ()->sout("hello");
new Thread(r).start();

// ()	method signature
// ->	arrow tooken
// {}	method body	
```
#### functional interfaces

A functional inteface has only one abstract method.
Example: Runnable, Callable, Comparator,TimerTask
It needs to be annotated with `@FunctionalInterface`

There is no performance benefit of anonymous classes vs labda expressions. It's just a matter of coder's preferences.
Makes conditional code cleaner.


#### predicates
A Predicate Interface that has a single boolean method called _test_.

```
Predicate<Person> hasTrueFlag = Person::isFlag;
people.stream()
	.filter(hasTrueFlag)
       .forEach(System.out::println);

```

#### method refrences
Allows to name the method you want to call instead of calling dirrectly.
Teh method name can be passed as an argument. For exmaple in Collections.sort(<list>, <method name>)

```
{
...
    private List<Person> sort() {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Joe Doe", true));
        people.add(new Person("Joe Shmoe", true));
        people.add(new Person("Marry Poppins", false));

        people.sort(this::compareLength);

        return people;
    }


    private Integer compareLength(Person a, Person b) {
        Integer aLength = a.getName().length();
        Integer bLength = b.getName().length();
        return aLength.compareTo(bLength);
    }
}
```

#### default methods
Default methods are full implmented methods that can be inhereted by the classes that implement the interface. 
They can use the class methods too.

```
public interface PersonInterface {

    String getName();

    default String prettyName() {
        return "===" + getName() + "===";
    }
}

```

#### static methods
similar to default method. just another option tto eleminate layers of inheritance and help to not DRY.


```
public interface PersonInterface {

    // all interface methods are public by default
    String getName();

    static String prettyName() {
        return "===" + getName() + "===";
    }
}
```


## Collections with stream
A new of working with the data as a whole.
2 types of streams:
- sequential (deal with with one item at a time) `.steam()`
- parallel `.stream().parallel()` or `.parallelStream()`. it is for boxes with multiple CPUs 

#### how to make streams out arrays
```
Integer[] numbers = {1, 2, 30, 45, 6, 7};
Stream<Integer> s = Stream.of(numbers);
```

```
int[] numbers = {1, 2, 30, 45, 6, 7};
// this work for array with primitives
Stream<Integer> s = Arrays.stream(numbers);
```

#### aggregate streams
count, sum, average are final operation in stream pipeline
```
int start = 1;
int end = 10000;
List<Integer> list = new ArrayList<>();
for (int i = start; i < end; i++) {
    list.add(i);
}

long count = list.stream().count();
System.out.println("count = " + count);

long sum = list.stream().mapToInt(it -> it).sum();
System.out.println("sum = " + sum);

// optional wrapper used to handle better nulls
OptionalDouble avg = list.stream().mapToInt(it -> it).average();

if (avg.isPresent()) {
    System.out.println("avg = " + avg.getAsDouble());
} else {
    System.out.println("avg is not present");
}
```




## Date/Time API
The object of the new API are immutable and threadsafe.

A couple key ones:

`Instant` - a point in time as an epoch
`Duration` - takes to `Instant` objects and return the time difference 

```
Instant start = Instant.now();

Thread.sleep(2000);

Instant end = Instant.now();

Duration d = Duration.between(start, end);

System.out.println("Duration in seconds = " + d.getSeconds());
System.out.println("Duration in millis = " + d.toMillis());
```