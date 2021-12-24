import Link from "next/link";
import { ROUTES } from "../../constants";

imterface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
  SUBS: []
}

export const Navigarion = () => {
  return (
    <header>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {
            ROUTE.map((routeObject: ROUTE) => {
              return (
                <li>
                  <Link href={routeObject.PATH}>
                    <a>{routeObject.LABEL}</a>
                  </Link>
                  <ul>
                    {routeObject.SUBS.map((subRouteObject) => {
                      return 
                    })}
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  );
};
