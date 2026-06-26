# Testing MkDocs Material Folding

This is a regular paragraph text. Below are the collapsible blocks to test your settings.
<!-- #region -->
???+ note "Test Block 1 (Starts open, click arrow to collapse)"
    This is line one of the hidden content.
    This is line two of the hidden content.
    
    - You can even hide lists.
    - Like this item.
<!-- #endregion -->
??? bug "Test Block 2 (Starts closed, click arrow to expand)"
    Warning! This block is hidden by default.
    You can see this text only after expanding it.

    ```python
    def test_function():
        print("Even code blocks fold inside!")
    ```

### Next Section Heading
The folding should stop exactly here because this heading is not indented.
