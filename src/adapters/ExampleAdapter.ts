import { useMutation, useQuery } from "@tanstack/react-query";
import { type MutationCallBack, type QueryCallBack } from "./helpers";
import ApiService from "./ApiService";

interface ExampleType {
  example: any;
}

// api service initiliazer
const exampleService = new ApiService("/example");

// mutation utility
function useExampleMutation<T>(
  mutationCallback: MutationCallBack<T>,
  params: string
) {
  return useMutation({
    mutationFn: (payload: T) => mutationCallback(payload, params),
  });
}

/* query utility
 **other options from tanstack query can be added to this utility function** */
function useExampleQuery<B>(
  queryCallback: QueryCallBack<B>,
  queryKey: string[],
  slug: string
) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(slug),
  });
}

const ExampleAdapter = {
  /* function that calls the api endpoint that accepts POST, 
  PUT, DELETE, PATCH type requests and a content type */
  exampleMutationApiCall: async function (payload: {}, _params: string) {
    const res = await exampleService.mutate("route", payload, "JSON", "POST");
    return res;
  },

  /* function that handles GET requests, returns the response gotten 
  from the request with the approriate type passed in via generics, used for array of objects  */
  exampleQueryApiCall1: async function (params: string) {
    const res = await exampleService.getAll<ExampleType>(params);
    return res;
  },

  /* function that handles GET requests, returns the response gotten 
  from the request with the approriate type passed in via generics, used for singular objects  */
  exampleQueryApiCall2: async function (params: string) {
    const res = await exampleService.getByID<ExampleType>(params);
    return res;
  },
};

export { ExampleAdapter, useExampleMutation, useExampleQuery };
