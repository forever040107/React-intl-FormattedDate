import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedDate, FormattedTime } from "react-intl";
import { addAppLocaleData } from "./localeData";
import moment from "moment";
addAppLocaleData();

ReactDOM.render(
  <ul>
    {[
      "zh-CN",
      "vi-VN",
      "en-US",
      "en-GB",
      "de",
      "fr",
      "es",
      "cs",
      "sk",
      "ja"
    ].map(locale => {
      const options = { month: "numeric", day: "numeric" };
      return (
        <IntlProvider locale={locale}>
          <li>
            <h3>
              <img
                src="blank.gif"
                class={`flag flag-${locale}`}
                alt="Czech Republic"
              />{" "}
              locale="{locale}"
            </h3>
            <div>
              <ul>
                <li>
                  <h4>使用Intl.DateTimeFormat</h4>
                  {Intl.DateTimeFormat(locale, options).format(
                    1586770045 * 1000
                  )}
                  <h4>使用FormattedDate不顯示year option</h4>
                  <FormattedDate
                    value={moment.unix(1586770045).format("LL HH:mm:ss")}
                    day="numeric"
                    month="numeric"
                  />
                </li>
                <li>
                  <h4>使用FormattedDate預設option</h4>
                  <FormattedDate
                    value={moment.unix(1586770045).format("LL HH:mm:ss")}
                  />{" "}
                  <FormattedTime
                    value={moment.unix(1586770045).format("LL HH:mm:ss")}
                  />
                </li>
                <li>
                  <h4>使用moment</h4>
                  {moment(1586770045 * 1000)
                    // .tz(timeZone)
                    .locale(locale)
                    .format(`L HH:mm:ss`)}
                </li>
              </ul>
            </div>
          </li>
        </IntlProvider>
      );
    })}
  </ul>,
  document.getElementById("root")
);
