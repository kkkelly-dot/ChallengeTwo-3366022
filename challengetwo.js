class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically once during initialization
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const results = [];
    let prefix = '';

    for (const char of searchWord) {
      prefix += char;
      const suggestions = [];

      for (const product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break; // Only top 3 suggestions
      }

      results.push(suggestions);
    }

    return results;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));

/*
Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/