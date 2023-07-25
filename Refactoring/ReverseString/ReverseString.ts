function reverseString(s: string[]): void {

    let k : string[] = []
    
    for(let i=s.length-1; i>=0 ; i--) {
            k.push(s[i])
         }
         for(let i=0; i<k.length; i++) {
             s[i] = k[i]
         } 
    }