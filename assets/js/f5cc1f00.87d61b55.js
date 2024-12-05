"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[197],{4217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));n(6340);const r={},o="Day 4: Ceres Search",l={unversionedId:"2024/puzzles/day04",id:"2024/puzzles/day04",title:"Day 4: Ceres Search",description:"by @bishabosha",source:"@site/target/mdoc/2024/puzzles/day04.md",sourceDirName:"2024/puzzles",slug:"/2024/puzzles/day04",permalink:"/scala-advent-of-code/2024/puzzles/day04",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2024/puzzles/day04.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 3: Mull It Over",permalink:"/scala-advent-of-code/2024/puzzles/day03"},next:{title:"Day 5: Print Queue",permalink:"/scala-advent-of-code/2024/puzzles/day05"}},s={},d=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution Summary",id:"solution-summary",level:2},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Final Code",id:"final-code",level:2},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-4-ceres-search"},"Day 4: Ceres Search"),(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bishabosha"},"@bishabosha")),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2024/day/4"},"https://adventofcode.com/2024/day/4")),(0,i.kt)("h2",{id:"solution-summary"},"Solution Summary"),(0,i.kt)("p",null,"Treat the input as a 2D grid, (whose elements are only ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Part 1:")," iterate through each point in the grid.\nFor each point and for each of the eight directions, try to construct the word ",(0,i.kt)("inlineCode",{parentName:"p"},'"XMAS"')," starting from the current point, while handling out of bounds.\nBecause each origin point is visited once there is no need to handle duplicates.\nCount the total matched words."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Part 2:")," iterate through each point in the grid.\nIf the current point is ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", then check if it is the middle of a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MAS"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transform the point to each of its four corners and try to construct the word ",(0,i.kt)("inlineCode",{parentName:"li"},'"MAS"')," travelling in the opposite direction of the translation,"),(0,i.kt)("li",{parentName:"ul"},"a correct X-MAS will have two such corners for a single origin ",(0,i.kt)("inlineCode",{parentName:"li"},"'A'"),".")),(0,i.kt)("p",null,"Again, because each origin point is visited once there is no need to handle duplicates.\nCount the total ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'")," where this is true."),(0,i.kt)("h3",{id:"part-1"},"Part 1"),(0,i.kt)("p",null,"First, the puzzle description does not say explicitly, but the input is a square grid, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," lines of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," characters."),(0,i.kt)("p",null,"It will help us explore the data if it is represented as a 2D space:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Grid = IArray[IArray[Char]]\n\ndef parse(input: String): Grid =\n  IArray.from(\n    input.linesIterator.map(IArray.from)\n  )\n")),(0,i.kt)("admonition",{title:"Why IArray for grid, how do I model points?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"IArray")," is an efficient immutable array of fixed size, with fast random access."),(0,i.kt)("p",{parentName:"admonition"},"e.g. the string"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ABC\\n\nDEF\\n\nGHI\\n\n")),(0,i.kt)("p",{parentName:"admonition"},"would be represented as"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"IArray(\n  IArray('A', 'B', 'C'),\n  IArray('D', 'E', 'F'),\n  IArray('G', 'H', 'I')\n)\n")),(0,i.kt)("p",{parentName:"admonition"},"In the 2D grid, you have a coordinate system where ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," axis corresponds to rows, i.e. entries of the outer array,\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," axis corresponds to columns, i.e. entries of the nested arrays. The origin ",(0,i.kt)("inlineCode",{parentName:"p"},"y=0,x=0")," is at the top left.\nA point ",(0,i.kt)("inlineCode",{parentName:"p"},"y=2,x=1")," (i.e. third row, second column) is then accessed with ",(0,i.kt)("inlineCode",{parentName:"p"},"grid(2)(1)"),", giving ",(0,i.kt)("inlineCode",{parentName:"p"},"'H'")," in this case.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finding the XMAS")),(0,i.kt)("p",null,"For part 1, we are tasked with finding occurrences of the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"XMAS"'),", which can begin at any point, and the letters can be in any straight line in any of the 8 directions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Dir(dy: Int, dx: Int)\n\nval dirs = IArray(\n  Dir(dy = -1, dx = 0), // up\n  Dir(dy = 0, dx = 1), // right\n  Dir(dy = 1, dx = 0), // down\n  Dir(dy = 0, dx = -1), // left\n  Dir(dy = -1, dx = 1), // up-right\n  Dir(dy = 1, dx = 1), // down-right\n  Dir(dy = 1, dx = -1), // down-left\n  Dir(dy = -1, dx = -1) // up-left\n)\n")),(0,i.kt)("p",null,"in this case, we represent a direction as a vector in 2 dimensions: ",(0,i.kt)("inlineCode",{parentName:"p"},"dy")," (the change in ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"), and ",(0,i.kt)("inlineCode",{parentName:"p"},"dx")," (the change in ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),")."),(0,i.kt)("p",null,"So we need a capability to build a string of characters in any direction, traversing the grid.\nWe can do this with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),", which can generate all the potential characters while traversing in a direction\nuntil we reach the end of the grid."),(0,i.kt)("p",null,"First the test for grid out-of-boundary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def boundCheck(x: Int, y: Int, grid: Grid): Boolean =\n  x >= 0 && x < grid.length && y >= 0 && y < grid(0).length\n")),(0,i.kt)("p",null,"Next the iterator, build with ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator.unfold"),", which will continue iterating some internal state, until a final state is reached:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def scanner(x: Int, y: Int, dir: Dir, grid: Grid): Iterator[Char] =\n  Iterator.unfold((y, x)): (y, x) =>\n    Option.when(boundCheck(x, y, grid))(grid(y)(x) -> (y + dir.dy, x + dir.dx))\n")),(0,i.kt)("p",null,"the unfold method takes an initial state ",(0,i.kt)("inlineCode",{parentName:"p"},"(y,x)"),", and a function to produce an optional pair of the iterators value,\nand the next state. In the case above, we stop when ",(0,i.kt)("inlineCode",{parentName:"p"},"boundCheck")," fails, return the letter at ",(0,i.kt)("inlineCode",{parentName:"p"},"grid(y)(x)")," paired with\nthe next position obtained by translating the point by the direction."),(0,i.kt)("p",null,"Next, we need a way to compare the string along a direction with a target word, and exit early as soon as the match would fail. We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"corresponds")," method on iterators to compare each element with another value, and exit as soon as an element either side doesnt match:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def scanString(target: String)(x: Int, y: Int, dir: Dir, grid: Grid): Boolean =\n  scanner(x, y, dir, grid).take(target.length).corresponds(target)(_ == _)\n\nval scanXMAS = scanString("XMAS")\n')),(0,i.kt)("p",null,"Now we have a way to find a string in a grid, we should iterate through each point in the grid, and count all the possible ",(0,i.kt)("inlineCode",{parentName:"p"},'"XMAS"')," strings starting from that point:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def totalXMAS(grid: Grid): Int =\n  val counts =\n    for\n      y <- grid.indices\n      x <- grid(y).indices\n    do\n      dirs.count(dir => scanXMAS(x, y, dir, grid))\n  counts.sum\n")),(0,i.kt)("p",null,"now we have the full solution for part 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): Int =\n  totalXMAS(parse(input))\n")),(0,i.kt)("h3",{id:"part-2"},"Part 2"),(0,i.kt)("p",null,"In part 2, we have a slight change, firstly, we will only be looking for ",(0,i.kt)("inlineCode",{parentName:"p"},'"MAS"')," string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val scanMAS = scanString("MAS")\n')),(0,i.kt)("p",null,"next, in our iteration through the grid, we will only be interested in the number of positions that are ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", that are\nalso the center of a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MAS")," formation. To do this, we will inspect for ",(0,i.kt)("inlineCode",{parentName:"p"},'"MAS"')," starting in each of the four surrounding corners."),(0,i.kt)("p",null,"e.g. if we picture the four corners in the grid like this,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"1-2\n-A-\n4-3\n")),(0,i.kt)("p",null,"Then we will look for ",(0,i.kt)("inlineCode",{parentName:"p"},'"MAS"')," starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," towards ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", from ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," towards ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),", from ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," towards ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", and from ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," towards ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("p",null,"To do that we will need two Dirs for each case, one to translate the current point to the corner, and then the opposite\ndirection to scan in. Here is how you can represent that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val UpRight = dirs(4)\nval DownRight = dirs(5)\nval DownLeft = dirs(6)\nval UpLeft = dirs(7)\n\nval dirsMAS = IArray(\n  UpLeft -> DownRight, // 1 -> 3\n  UpRight -> DownLeft, // 2 -> 4\n  DownRight -> UpLeft, // 3 -> 1\n  DownLeft -> UpRight  // 4 -> 2\n)\n")),(0,i.kt)("p",null,"Then to check if a single point is ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MAS"),", use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def isMAS(x: Int, y: Int, grid: Grid): Boolean =\n  grid(y)(x) match\n    case 'A' =>\n      val seen = dirsMAS.count: (transform, dir) =>\n        scanMAS(x + transform.dx, y + transform.dy, dir, grid)\n      seen > 1\n    case _ => false\n")),(0,i.kt)("p",null,"i.e. when the point is ",(0,i.kt)("inlineCode",{parentName:"p"},"'A'"),", then for each of the four corners, translate the point to the corner which will be the origin point to scan for ",(0,i.kt)("inlineCode",{parentName:"p"},'"MAS"'),". Then pass along the scanning direction and the grid. For a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MAS"),", two of the corners will be origin points for the word."),(0,i.kt)("p",null,"Putting it all together, we then again iterate through the grid, now only counting the points where ",(0,i.kt)("inlineCode",{parentName:"p"},"isMas")," is true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part2(input: String): Int =\n  totalMAS(parse(input))\n\ndef totalMAS(grid: Grid): Int =\n  val passing =\n    for\n      y <- grid.indices\n      x <- grid(y).indices\n      if isMAS(x, y, grid)\n    yield ()\n  passing.size\n")),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def part1(input: String): Int =\n  totalXMAS(parse(input))\n\ntype Grid = IArray[IArray[Char]]\n\ndef parse(input: String): Grid =\n  IArray.from(\n    input.linesIterator.map(IArray.from)\n  )\n\ncase class Dir(dy: Int, dx: Int)\n\nval dirs = IArray(\n  Dir(dy = -1, dx = 0), // up\n  Dir(dy = 0, dx = 1), // right\n  Dir(dy = 1, dx = 0), // down\n  Dir(dy = 0, dx = -1), // left\n  Dir(dy = -1, dx = 1), // up-right\n  Dir(dy = 1, dx = 1), // down-right\n  Dir(dy = 1, dx = -1), // down-left\n  Dir(dy = -1, dx = -1) // up-left\n)\n\ndef boundCheck(x: Int, y: Int, grid: Grid): Boolean =\n  x >= 0 && x < grid.length && y >= 0 && y < grid(0).length\n\ndef scanner(x: Int, y: Int, dir: Dir, grid: Grid): Iterator[Char] =\n  Iterator.unfold((y, x)): (y, x) =>\n    Option.when(boundCheck(x, y, grid))(grid(y)(x) -> (y + dir.dy, x + dir.dx))\n\ndef scanString(target: String)(x: Int, y: Int, dir: Dir, grid: Grid): Boolean =\n  scanner(x, y, dir, grid).take(target.length).corresponds(target)(_ == _)\n\nval scanXMAS = scanString("XMAS")\n\ndef totalXMAS(grid: Grid): Int =\n  val counts =\n    for\n      y <- grid.indices\n      x <- grid(y).indices\n    do\n      dirs.count(dir => scanXMAS(x, y, dir, grid))\n  counts.sum\n\ndef part2(input: String): Int =\n  totalMAS(parse(input))\n\nval scanMAS = scanString("MAS")\n\nval UpRight = dirs(4)\nval DownRight = dirs(5)\nval DownLeft = dirs(6)\nval UpLeft = dirs(7)\n\nval dirsMAS = IArray(\n  UpLeft -> DownRight,\n  UpRight -> DownLeft,\n  DownRight -> UpLeft,\n  DownLeft -> UpRight\n)\n\ndef isMAS(x: Int, y: Int, grid: Grid): Boolean =\n  grid(y)(x) match\n    case \'A\' =>\n      val seen = dirsMAS.count: (transform, dir) =>\n        scanMAS(x + transform.dx, y + transform.dy, dir, grid)\n      seen > 1\n    case _ => false\n\ndef totalMAS(grid: Grid): Int =\n  val passing =\n    for\n      y <- grid.indices\n      x <- grid(y).indices\n      if isMAS(x, y, grid)\n    yield ()\n  passing.size\n')),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bishabosha/advent-of-code-2024/blob/main/2024-day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bishabosha"},"Jamie Thompson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Philippus/adventofcode/blob/main/src/main/scala/adventofcode2024/Day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/philippus"},"Philippus Baalman")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/henryk-cesnolovic/advent-of-code-2024/blob/main/AdventOfCode/src/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/henryk-cesnolovic"},"Henryk \u010cesnolovi\u010d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/YannMoisan/advent-of-code/blob/master/2024/src/main/scala/Day4.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YannMoisan"},"YannMoisan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rmarbeck/advent2024/blob/main/day4/src/main/scala/Solution.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rmarbeck"},"Rapha\xebl Marbeck")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spamegg1/aoc/blob/master/2024/04/04.worksheet.sc#L87"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spamegg1/"},"Spamegg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jnclt/adventofcode2024/blob/main/day04/ceres-search.sc"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jnclt"},"jnclt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scarf005/aoc-scala/blob/main/2024/day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scarf005"},"scarf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nichobi/advent-of-code-2024/blob/main/04/solution.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nichobi"},"nichobi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/makingthematrix/AdventOfCode2024/blob/main/src/main/scala/io/github/makingthematrix/AdventofCode2024/DayFour.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/makingthematrix"},"Maciej Gorywoda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/itsjoeoui/aoc2024/blob/main/src/day04.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/itsjoeoui"},"itsjoeoui"))),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page.\nYou can even write the whole article! ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-advent-of-code/discussions/424"},"See here for the expected format")))}h.isMDXComponent=!0}}]);