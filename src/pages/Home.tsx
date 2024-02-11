import { Heading } from "@radix-ui/themes";
import { SEOWrapper, AppLayout } from "@/layouts";
import { useExampleQuery, ExampleAdapter } from "@/adapters/ExampleAdapter";
import { queryKeys } from "@/lib/constants";

const metaData = {
  title: "React Starter Project",
  name: "description",
  content: "React Starter Project",
};

export default function Home() {
  //example of how to use the query adapter, this returns all the data from react query
  const { data, isLoading, error, isError, ...rest } = useExampleQuery(
    ExampleAdapter.exampleQueryApiCall1,
    [queryKeys.EXAMPLE_KEY],
    "" // pass in any params you may have
  );

  return (
    <SEOWrapper {...metaData}>
      <AppLayout>
        <Heading className="text-center">React Project Starter</Heading>
      </AppLayout>
    </SEOWrapper>
  );
}
