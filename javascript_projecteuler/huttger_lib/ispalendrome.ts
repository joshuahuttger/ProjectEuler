'use strict'

export function ispalendrome(s:string):boolean {
    return s === s.split("").reverse().join("");
}