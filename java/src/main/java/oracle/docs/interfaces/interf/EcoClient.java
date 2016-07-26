package oracle.docs.interfaces.interf;

public class EcoClient {

    public static void main(String[] args) {

        Mercedes mercedes = new Mercedes("CLS");
        Tesla tesla = new Tesla("X3");
        Bike bike = new Bike("Bianchi");

        CarbonFootPrint[] carbonFootPrints = new CarbonFootPrint[3];
        carbonFootPrints[0] = mercedes;
        carbonFootPrints[1] = tesla;
        carbonFootPrints[2] = bike;

        for( CarbonFootPrint cf : carbonFootPrints){
            System.out.println("<" + cf.getName() + "> eco : " + cf.isEcoFriendly() + ", co2: " + cf.co2Emmision());
        }

    }
}
