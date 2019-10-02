import { HKT } from "fp-ts/lib/HKT";

/* 
  This was an exercise in trying to approximate ADTs exactly as they do in F# into Typescript.
  As you can see, this is doable, but requires a lot, a lot of boilerplate.
  Also, we aren't even done, none of these have an kind of type instances associated with them,
  they aren't even functors. Maybe if I did make them functors or Monads this would be much easier,
  but I'm done with this for now.

  We don't even have pattern matching -- Apart from using monadic options like eithers and options,
  it just isn't practical to parameterise and wrap every little literal like this.
  But I'm glad I did it and saw it in action, a lot of things are a lot clearer now.

  Maybe I will flesh out the instances on most of these.
*/

function valConstructor<URI, A>(URI: URI, val: A): HKT<URI, A> {
  return {
    _URI: URI,
    _A: val
  };
}

// CheckNumber of int
const CheckNumberURI = "CheckNumber";
type CheckNumberURI = typeof CheckNumberURI;
type CheckNumber = HKT<CheckNumberURI, number>;
function CheckNumber(a: number): CheckNumber {
  return valConstructor(CheckNumberURI, a);
}

// CardNumber of string
const CardNumberURI = "CardNumber";
type CardNumberURI = typeof CardNumberURI;
type CardNumber = HKT<CardNumberURI, string>;
function CardNumber(a: string): CardNumber {
  return valConstructor(CardNumberURI, a);
}

// CCInfo record
type CreditCardInfo = {
  CardType: CardType;
  CardNumber: CardNumber;
};
function CreditCardInfo(type: CardType, num: string): CreditCardInfo {
  return {
    CardType: type,
    CardNumber: CardNumber(num) // checkValidity here?
  };
}

// Cash
const CashURI = "Cash";
type CashURI = typeof CashURI;
type Cash = { _URI: CashURI };
const Cash: Cash = { _URI: CashURI };

// Check of CheckNumber
const CheckURI = "Check";
type CheckURI = typeof CheckURI;
type Check = HKT<CheckURI, CheckNumber>;
function Check(cn: CheckNumber): Check {
  return valConstructor(CheckURI, cn);
}

// Card of CreditCardInfo
const CardURI = "Card";
type CardURI = typeof CardURI;
type Card = HKT<CardURI, CreditCardInfo>;
function Card(cci: CreditCardInfo): Card {
  return valConstructor(CardURI, cci);
}

// Payment amount of decimal (number in this case).
const PaymentAmountURI = "PaymentAmount";
type PaymentAmountURI = typeof PaymentAmountURI;
type PaymentAmount = HKT<PaymentAmountURI, number>;
function PaymentAmount(amt: number): PaymentAmount {
  return valConstructor(PaymentAmountURI, amt);
}

type Visa = "Visa";
type MasterCard = "MasterCard";
type CardType = Visa | MasterCard;

type PaymentMethod = Cash | Check | Card;

type EUR = "EUR";
type USD = "USD";
type Currency = EUR | USD;

type Payment = {
  Amount: PaymentAmount;
  Currency: Currency;
  Method: PaymentMethod;
};
