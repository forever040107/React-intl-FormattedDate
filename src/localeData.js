import { addLocaleData } from "react-intl";

import zhLocaleData from "react-intl/locale-data/zh";
import enLocaleData from "react-intl/locale-data/en";
import viLocaleData from "react-intl/locale-data/vi";
import deLocaleData from "react-intl/locale-data/de";
import frLocaleData from "react-intl/locale-data/fr";
import esLocaleData from "react-intl/locale-data/es";
import csLocaleData from "react-intl/locale-data/cs";
import skLocaleData from "react-intl/locale-data/sk";
import jaLocaleData from "react-intl/locale-data/ja";

export const localeData = [
  zhLocaleData,
  enLocaleData,
  viLocaleData,
  deLocaleData,
  frLocaleData,
  esLocaleData,
  csLocaleData,
  skLocaleData,
  jaLocaleData
];

export const addAppLocaleData = () =>
  localeData.forEach(locale => addLocaleData(locale));
