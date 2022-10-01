const randomCustomers = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);
const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
]
//import hours

export class CookieStand {
  customersEachHour: number[];
  cookiesEachHour: number[];
  totalCookies: number;
  constructor(
    readonly locationName: string,
    readonly minCustomer: number,
    readonly maxCustomer: number,
    readonly avgCustomer: number,
  ) {
    this.customersEachHour = hours.map(() => randomCustomers(this.minCustomer, this.maxCustomer));
    this.cookiesEachHour = this.customersEachHour.map((customers: number) => Math.floor(customers * this.avgCustomer));
    this.totalCookies = this.cookiesEachHour.reduce((a: number, b: number) => a + b, 0);
  }
}

export const Cookies = ({ stores }: { stores: CookieStand[] }) => (
  <table>
    <thead>
      <tr>
        <th></th>
        {hours.map((h: string) => (
          <th>{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {stores.map((store: CookieStand) => (
        <tr>
          <td>{store.locationName}</td>
          {store.cookiesEachHour.map((cookies: number) => (
            <td>{cookies}</td>
          ))}
          <td>{store.totalCookies}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
      <th></th>
      {hours.map((_: string, i: number) => (
        <td>
          {stores.reduce((sum: number, store: CookieStand) => sum + store.cookiesEachHour[i], 0)}
        </td>
      ))}
      <td>
        {stores.reduce((sum: number, store: CookieStand) => sum + store.totalCookies, 0)}
      </td>
      </tr>
    </tfoot>
  </table>
)