# iPhone_simulator

An iPhone simulator with auto-exclusion element. Dev in PURE JS.

<strong>Guide:</strong>

Just insert:

```
// the div with class "livello_1" is the primary layer.
<div id="store" class="livello_1" onclick="load_image('img/store.jpg', this);"></div>

// the div with class "livello_2" is a button for the primary layer. This item must be placed after level 1, it will be automatically excluded when the user go to another primary layer.
<div id="controller" class="livello_2">
  <div id="film" ></div>
  <div id="extra" ></div>
</div>

```

# MIT License

Copyright (c) 2017 Eugenio Segala

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
