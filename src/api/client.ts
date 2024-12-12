import { getBrowserIdent } from "../utils/createBrowserIdent";

const BROWSER_IDENT_HEADER = "browser-ident";

class APIClient {
  private browserIdent: string;

  constructor() {
    this.browserIdent = getBrowserIdent();
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

    return init;
  }

  private prepareFetchParams(input: RequestInfo | URL, init?: RequestInit) {
    if (input instanceof URL) {
      return { input, init: this.prepareInit(init) };
    }

    if (typeof input === "string") {
      return { input, init: this.prepareInit(init) };
    }

    const inputCopy = Object.assign({}, input);

    inputCopy.headers.set(BROWSER_IDENT_HEADER, this.browserIdent);

    return { input: inputCopy, init };
  }
}

export const apiClient = new APIClient();
