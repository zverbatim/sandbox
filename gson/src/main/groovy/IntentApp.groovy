import com.google.gson.Gson

/**
 * by imunteanu 
 * 9/1/17
 */
class IntentApp {

    static void main(String[] args) {
        Gson gson = new Gson()
        String s = """
{
    "name": "TestIntent",
    "slots": [
        {
            "name": "Quantity",
            "slotConstraint": "Required",
            "slotType": "AMAZON.NUMBER",
            "valueElicitationPrompt": {
                "messages": [
                    {
                        "contentType": "PlainText",
                        "content": "How many products?"
                    }
                ],
                "maxAttempts": 2
            },
            "priority": 2,
            "sampleUtterances": []
        },
        {
            "name": "Product",
            "slotConstraint": "Required",
            "slotType": "Product",
            "slotTypeVersion": "1",
            "valueElicitationPrompt": {
                "messages": [
                    {
                        "contentType": "PlainText",
                        "content": "What fruits would you like in the basket?"
                    }
                ],
                "maxAttempts": 2
            },
            "priority": 1,
            "sampleUtterances": []
        }
    ],
    "sampleUtterances": [
        "I want to buy some fruits now please",
        "I need {Quantity} {Product}",
        "I want {Quantity} {Product}"
    ],
    "fulfillmentActivity": {
        "type": "ReturnIntent"
    }
}
"""
        IntentBody intentBody = gson.fromJson(s, IntentBody.class)
        println(intentBody)
    }
}