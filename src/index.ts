import type { LanguageRegistration } from "@shikijs/core";
import regexSyntax from "../syntaxes/regex.tmLanguage.json";

const lang = regexSyntax as unknown as LanguageRegistration;
export default lang as unknown as LanguageRegistration;
