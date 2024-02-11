import { AxiosResponse } from "axios";

export type MutationCallBack<R> = (
  payload: R,
  params: string
) => Promise<AxiosResponse | undefined>;

export type QueryCallBack<B> = (slug: string) => Promise<B>;
