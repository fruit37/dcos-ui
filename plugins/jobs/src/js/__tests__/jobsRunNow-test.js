import { of } from "rxjs";
import { graphqlObservable } from "data-service";
import jobsRunNow from "../jobsRunNow";

jest.mock("data-service", () => ({
  graphqlObservable: jest.fn()
}));

describe("JobsRunNow", function() {
  describe("#jobsRunNow", function() {
    it("onItemSelect triggers a graphql mutation", function() {
      graphqlObservable.mockReturnValue(of("response"));
      jobsRunNow("aJobId").onItemSelect();

      expect(graphqlObservable).toBeCalledWith(
        expect.anything(),
        expect.anything(),
        { jobId: "aJobId" }
      );
    });
  });
});
