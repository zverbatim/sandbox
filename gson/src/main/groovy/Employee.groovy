class Employee {
    String name
    String email
    int age
    boolean isActive

    Employee(String name, String email, int age, boolean isActive) {
        this.name = name
        this.email = email
        this.age = age
        this.isActive = isActive
    }

    @Override
    String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", isActive=" + isActive +
                '}';
    }
}
