package java8;

import java.util.HashSet;
import java.util.Set;

class Person {
}

class TooManyPeopleException extends Throwable {
}

class Apartment {
    private static final int MAXIMUM_OCCUPANCY = 1000;
    private String address;
    final private Set<Person> roommates;

    Apartment(String newAddress) {
        this.address = newAddress;
        this.roommates = new HashSet<Person>();
    }

    String getAddress() {
        return address;
    }

    void addRoommate(Person newRoommate) throws TooManyPeopleException {
        roommates.add(newRoommate);
        if (roommates.size() > MAXIMUM_OCCUPANCY) {
            roommates.remove(newRoommate);
            throw new TooManyPeopleException();
        }
    }

    int getMaximumOccupancy() {
        return MAXIMUM_OCCUPANCY;
    }


}