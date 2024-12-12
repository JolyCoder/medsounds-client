import { getBrowserIdent } from "../utils/createBrowserIdent";

const BROWSER_IDENT_HEADER = "browser-ident";
const API_BASENAME = "/api";

class APIClient {
  private browserIdent: string;
  private basename: string;

  constructor() {
    this.browserIdent = getBrowserIdent();
    this.basename = API_BASENAME;
  }

  async makeRequest<T>(input: RequestInfo | URL, init?: RequestInit) {
    const preparedFetchParams = this.prepareFetchParams(input, init);

    const res = await fetch(
      preparedFetchParams.input,
      preparedFetchParams.init
    );

    if (res.ok) {
      return res
        .json()
        .then((parsedRes) => ({ data: parsedRes as T, raw: res }));
    }

    console.error("Failed to make request", res);
    throw new Error(res.statusText);
  }

  private prepareInit(init?: RequestInit) {
    const safeInit: RequestInit = Object.assign({}, init || {});

    safeInit.headers = {
      ...safeInit.headers,
      [BROWSER_IDENT_HEADER]: this.browserIdent,
    };

    return safeInit;
  }

  private prepareInput(input: RequestInfo | URL) {
    if (input instanceof URL) {
      const inputCopy = Object.assign({}, input);
      inputCopy.pathname = this.basename + inputCopy.pathname;

      return inputCopy;
    }

    if (typeof input === "string") {
      return this.basename + input;
    }

    const inputCopy = Object.assign({}, input);

    inputCopy.headers.set(BROWSER_IDENT_HEADER, this.browserIdent);
    inputCopy.url.replace(inputCopy.url, this.basename + API_BASENAME); // FIXME: dirty hack

    return input;
  }

  private prepareFetchParams(input: RequestInfo | URL, init?: RequestInit) {
    return { input: this.prepareInput(input), init: this.prepareInit(init) };
  }
}

export const apiClient = new APIClient();
