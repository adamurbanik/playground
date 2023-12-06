import {
  getEvents,
  createEvent,
  generateRandomNumber,
  getSomeData,
  getRealData,
} from "./search";

import { getSomeDataSomething } from "./someRequests";
import * as someRequests from "./someRequests";

jest.mock("./someRequests", () => {
  return {
    getSomeDataSomething: jest.fn().mockReturnValue("mocked something"),
    getRealDataApi: jest.fn()
  };
});

describe("getEvents", () => {
  test("returns events with ticket prices < 30", () => {
    const expectedEvent5 = { title: "Pop goes Punk!", price: 16.0 };
    const expectedEvent6 = { title: "Pop goes Punk!", price: 15.0 };

    const events = [
      createEvent("Pop goes Punk!", 20.0),
      createEvent("Pop goes Punk!", 19.0),
      createEvent("Pop goes Punk!", 18.0),
      createEvent("Pop goes Punk!", 17.0),
      createEvent("Pop goes Punk!", 16.0),
      createEvent("Pop goes Punk!", 15.0),
    ];

    // MOCK function
    const searchFilter = jest.fn((e) => e.price < 17);

    const results = getEvents(events, searchFilter);

    expect(results).toEqual([expectedEvent5, expectedEvent6]);

    expect(searchFilter).toHaveBeenCalled();
    expect(searchFilter.mock.calls.length).toBe(6);

    expect(searchFilter.mock.calls[0][0]).toStrictEqual({
      title: "Pop goes Punk!",
      price: 20,
    });
    expect(searchFilter.mock.calls[1][0]).toStrictEqual(events[1]);
    expect(searchFilter.mock.calls[2][0]).toStrictEqual(events[2]);
    expect(searchFilter.mock.calls[3][0]).toStrictEqual(events[3]);
    expect(searchFilter.mock.calls[4][0]).toStrictEqual(events[4]);
    expect(searchFilter.mock.calls[5][0]).toStrictEqual(events[5]);
  });

  test("check random number", () => {
    // SPY
    const randomMock = jest.spyOn(global.Math, "random").mockReturnValue(66);
    const randomString = generateRandomNumber();

    expect(randomString).toEqual("some-string-66");
    expect(randomMock).toHaveBeenCalled();
    expect(randomMock).toHaveBeenCalledTimes(1);
  });

  test("getData", () => {
    const result = getSomeData();
    expect(result).toBe("mocked something");

    const resultSomething = getSomeDataSomething();
    expect(resultSomething).toBe("mocked something");
  });

  test("spy on", async () => {
    jest
      .spyOn(someRequests, "getRealDataApi")
      .mockReturnValue({ data: "response" });

    const result = await getRealData();

    expect(result).toStrictEqual({ data: "response" });
  });
});



// hoist

// jets auto mock function

// done in tests

// code coverage - test coverage
