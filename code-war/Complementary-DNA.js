function DNAStrand(dna) {
  let chars = {
    T: "A",
    A: "T",
    C: "G",
    G: "C",
  };
  return dna.replace(/[TACG]/g, (m) => chars[m]);
}
console.log(DNAStrand("AAAA"));
