package pattern.protoclonepattern;

public class ProtoCloneDemo {

    public static void main(String[] args) throws CloneNotSupportedException {
        FurnitureCache.load();

        for (int i = 1; i < 3; i++) {
            Furniture f = FurnitureCache.getFurniture(i);
            if (f != null) {
                f.display();
            } else {
                System.out.println("i = " + i + " is an invalid id in cache map");
            }
        }
    }
}
