import { describe, expect, it } from "vitest";
import { elure, shippingOffer } from "@/lib/elure";

describe("ELURE offer", () => {
  it("offers ELURE at ₹1,700", () => {
    expect(elure.price).toBe(1700);
    expect(elure.currency).toBe("INR");
  });
  it("includes complimentary shipping only on the first order", () => {
    expect(shippingOffer(true)).toBe(true);
    expect(shippingOffer(false)).toBe(false);
  });
});