function encode (str) {
    if(!str.length) return null;
    return str.join("-encodestr")
}

function decode (s) {
    if(!s) return []
    return s.split("-encodestr")
}

console.log(encode(["hello","wor***ld"]))
console.log(decode("hello-encodestrwor***ld"));