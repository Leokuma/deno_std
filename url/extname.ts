// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

import { extname as posixExtname } from "@std/path/posix/extname";
import { strip } from "./_strip.ts";

/**
 * Returns the file extension of a given URL or string with leading period.
 *
 * The extension is sourced from the path portion of the URL. If there is no
 * extension, an empty string is returned.
 *
 * @param url The URL from which to extract the extension.
 * @returns The extension of the URL.
 *
 * @example Basic usage
 * ```ts
 * import { extname } from "@std/url/extname";
 *
 * extname("https://deno.land/std/path/mod.ts"); // ".ts"
 *
 * extname("https://deno.land/std/path/mod"); // ""
 *
 * extname("https://deno.land/std/path/mod.ts?a=b"); // ".ts"
 *
 * extname("https://deno.land/"); // ""
 * ```
 */
export function extname(url: string | URL): string {
  url = new URL(url);
  strip(url);
  return posixExtname(url.pathname);
}
