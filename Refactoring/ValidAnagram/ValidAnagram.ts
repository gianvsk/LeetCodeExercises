function isAnagram(s: string, t: string): boolean {

    let s1 : string[] = []
    let t1 : string[] = []
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            s1.push(s[i])
            t1.push(t[i])
        }
        for (let i = 0; i < s1.length; i++) {
            for (let j = 0; j < t1.length; j++) {
                if (s1[i] === t1[j]) {
                    t1[j] = ''
                    break;
                }
            }
        }
        for (let i = 0; i < t1.length; i++)
            if (t1[i] !== '') return false
        return true
    } else return false
};