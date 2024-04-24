function a (line) {
    let tokens = line.split('');
    let max = 0
        

    for(i = 0; i < tokens.length; i++) {
        getsum(i, i)
        getsum(i, i+1)
    }
    function getsum (left, right) {
        let len = 0
        while (tokens[left] === tokens[right] && left >=0 && right < tokens.length) {
            len = right-left+1
            left--
            right++
        }
        max = Math.max(max, len)
        // console.log(max)
        // console.log(len)
    }

    console.log(max)
}
a('cvhuocqtmstfisgzwhutwoscfomfocfktliktumejbfkugpmhlckljrjbczojzoxwpskkxfbkignmlnejujxwwpsiovuvkflhjdqjtvddloqxdjsvntygvsyqvmwioqgtuqmlpdnvxmjkenrltmenvhcqdrptwerthumwezrcidrzehwyskmovsjkhkitpbemujveknxhscjokkdivssoodxswcoqebouckkhyiwrbydyh')