import com.google.gson.Gson

class EmployeeApp {

    static void main(String[] args) {
        serialize()
        deserialize()
    }

    private static void deserialize() {
        println("Deserialize:")
        String s = "{\"name\":\"joe\",\"email\":\"joe@company.co\",\"age\":26,\"isActive\":true}"
        Gson gson = new Gson()
        Employee userObject = gson.fromJson(s, Employee.class)
        println(userObject)
    }

    private static void serialize() {
        println("Serialize:")
        Employee userObject = new Employee(
                "Joe",
                "joe@company.co",
                56,
                true
        )

        Gson gson = new Gson()
        String userJson = gson.toJson(userObject)
        println(userJson)
    }
}
