import { stream } from "@dcos/mesos-client";

export const MesosStreamType = Symbol("MesosStreamType");
export default stream({ type: "SUBSCRIBE" }, "/mesos/api/v1?subscribe")
  .publishReplay()
  .refCount();
