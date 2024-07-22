//https://leetcode.com/contest/weekly-contest-247/problems/cyclically-rotating-a-grid/
function rotateGrid(a: number[][], K: number): number[][] {
  let n = a.length, m = a[0].length;
        for(let T = 0, D = n-1, L = 0, R = m-1;L <= R && T <= D;T++,D--,L++,R--){
            let pe = 2*(n-1-T*2) + 2*(m-1-T*2);
            let lk = K % pe;
            for(let t = 0;t < lk;t++){
                let temp = a[T][L];
                for(let s = L+1;s <= R;s++){
                    a[T][s-1] = a[T][s];
                }
                for(let s = T+1;s <= D;s++){
                    a[s-1][R] = a[s][R];
                }
                for(let s = R-1;s >= L;s--){
                    a[D][s+1] = a[D][s];
                }
                for(let s = D-1;s >= T+1;s--){
                    a[s+1][L] = a[s][L];
                }
                a[T+1][L] = temp;
            }
        }
        return a;
    }
