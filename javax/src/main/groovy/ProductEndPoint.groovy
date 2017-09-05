import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType


@Path("/v1")
class ProductEndPoint {

    @GET
    @Path("/product")
    @Produces(MediaType.APPLICATION_JSON)
    Product get() {
        return new Product("foo", true)
    }
}
