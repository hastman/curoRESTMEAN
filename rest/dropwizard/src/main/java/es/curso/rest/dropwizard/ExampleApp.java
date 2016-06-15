package es.curso.rest.dropwizard;

import com.sun.jersey.api.core.ResourceConfig;
import com.sun.jersey.server.linking.LinkFilter;
import es.curso.rest.dropwizard.model.ModelSample;
import es.curso.rest.dropwizard.model.SubModelSample;
import es.curso.rest.dropwizard.resources.ResourceSample;
import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;


public class ExampleApp extends Application<Configuration> {


    public static void main(String[] args) throws Exception {
        new ExampleApp().run(new String[]{"server"});
    }


    @Override
    public void initialize(Bootstrap<Configuration> bootstrap) {

    }

    @Override
    public void run(Configuration configuration, Environment environment) throws Exception {
        ResourceSample resourceSample = new ResourceSample();
        environment.jersey().register(resourceSample);
        environment.jersey().property(ResourceConfig.PROPERTY_CONTAINER_RESPONSE_FILTERS, LinkFilter.class);
        addCorsHeaders(environment);
        populateWithTestData(resourceSample);
    }

    private void populateWithTestData(ResourceSample personResource) {
        personResource.add(new ModelSample(null, "Test", 12l, new SubModelSample("hola", "apellido")));
        personResource.add(new ModelSample(null, "Otro test", 102l, new SubModelSample("adios", "apellido")));
    }

    private void addCorsHeaders(Environment environment) {
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORS", CrossOriginFilter.class);
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
        filter.setInitParameter("allowedOrigins", "*");    // allowed origins comma separated
        filter.setInitParameter("allowedHeaders", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
        filter.setInitParameter("allowedMethods", "GET,PUT,POST,DELETE,OPTIONS,HEAD");
        filter.setInitParameter("allowCredentials", "true");
    }

}
