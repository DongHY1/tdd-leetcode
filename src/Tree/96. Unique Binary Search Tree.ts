export function numTrees(n: number): number {
  //numTrees[4] = numTrees[0]*numTrees[3]
  //numTrees[1]*numTrees[2]+
  //numTrees[2]*numTrees[1]+
  //numTrees[3]*numTrees[0]
  const cache: number[] = [];
  const dfs = (n: number): number => {
    if (n === 1) return n;
    if (cache[n]) return cache[n];
    let totalCount = 0;
    for (let i = 1; i <= n; i++) {
      const lCount = i > 1 ? dfs(i - 1) : 1;
      const rCount = i < n ? dfs(n - i) : 1;
      totalCount += lCount * rCount;
    }
    cache[n] = totalCount;
    return totalCount;
  };
  return dfs(n);
}
