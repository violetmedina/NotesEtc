function ghostBusters(building) {
    let res = ""
    for (let letter of building) {
        if (letter != " ") {
            res += letter
        }
    }
    if (building == res) {
        return "You just wanted my autograph didn't you?"
    }
    return res
}