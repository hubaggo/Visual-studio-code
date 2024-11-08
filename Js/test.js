function seimidten(tall1, tall2, tall3) {

    if (tall1 > Math.min(tall2, tall3) && tall1 < Math.max(tall2, tall3)) {
        return true
    } else {
        return false
    }
}