function a () {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] strings = scanner.nextLine().split(" ");
        String A = strings[0];

        String B = strings[1];

        int[][] results = new int[B.length() + 1][A.length() + 1];

        for (int i = 0; i <results.length; i++) {
            results[i][0] = i;
        }
        for (int i = 0; i < A.length() + 1; i++) {
            results[0][i] = i;
        }
        for (int i = 1; i < results.length; i++) {
            for (int j = 1; j < results[i].length ; j++) {
                if (B.charAt(i-1) == A.charAt(j-1)) {
                    results[i][j] = Math.min(results[i-1][j-1],Math.min(results[i - 1][j], results[i][j - 1]))+1;
                }else {
                    results[i][j] = Math.min(results[i - 1][j], results[i][j - 1])+1;
                }
            }
        }
        console.log(results[B.length()][A.length()]);
    }
}