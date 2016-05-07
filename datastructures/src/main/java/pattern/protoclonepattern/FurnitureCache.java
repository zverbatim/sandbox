package pattern.protoclonepattern;

import java.util.HashMap;

public class FurnitureCache {

    private static HashMap<Integer, Furniture> map  = new HashMap<Integer, Furniture>();

    public static Furniture getFurniture(Integer key) throws CloneNotSupportedException {
        Furniture cachedFurniture =  map.get(key);

        // the juice of the approach
        // needs casting since it's returned as an object
        return (Furniture) cachedFurniture.clone();
    }


    public static void load(){
        System.out.println("Load the map...");
        Chair chair = new Chair();
        chair.setBrand(Brand.BAFUSO);
        map.put(1, chair);

        Sofa sofa = new Sofa();
        sofa.setBrand(Brand.MANZONI);
        map.put(2, sofa);
    }
}
