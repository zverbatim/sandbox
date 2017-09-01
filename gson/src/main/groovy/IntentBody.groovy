import com.amazonaws.services.lexmodelbuilding.model.CodeHook
import com.amazonaws.services.lexmodelbuilding.model.FulfillmentActivity
import com.amazonaws.services.lexmodelbuilding.model.Slot

/**
 * by imunteanu 
 * 9/1/17
 */
class IntentBody {

     String name

     String description

     List<Slot> slots

     Collection<String> sampleUtterances

     FulfillmentActivity fulfillmentActivity

     CodeHook dialogCodeHook


     @Override
     public String toString() {
          return "IntentBody{" +
                  "name='" + name + '\'' +
                  ", description='" + description + '\'' +
                  ", slots=" + slots +
                  ", sampleUtterances=" + sampleUtterances +
                  ", fulfillmentActivity=" + fulfillmentActivity +
                  ", dialogCodeHook=" + dialogCodeHook +
                  '}'
     }
}
