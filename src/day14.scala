// using scala 3.0.2

package day14

import scala.util.Using
import scala.io.Source

@main def part1(): Unit =
  val answer = part1(readInput())
  println(s"The answer is: $answer")

@main def part2(): Unit =
  val answer = part2(readInput())
  println(s"The answer is:\n$answer")

def readInput(): String =
  Using.resource(Source.fromFile("input/day14"))(_.mkString)

type InsertionRules = Map[(Char, Char), Char]

def part1(input: String): Int =
  val (initialPolymer, insertionRules) = parseInput(input)
  val finalPolymer = (0 until 10).foldLeft(initialPolymer)((polymer, _) => applyRules(polymer, insertionRules))
  val frequencies = finalPolymer.groupMapReduce(identity)(_ => 1)(_ + _)
  val max = frequencies.values.max
  val min = frequencies.values.min
  max - min

def parseInput(input: String): (List[Char], InsertionRules) =
  val sections = input.split("\n\n")
  val initialPolymer = sections(0).toList
  val insertionRules = sections(1).linesIterator.map(parseRule).toMap
  (initialPolymer, insertionRules)

def parseRule(line: String): ((Char, Char), Char) =
  line match
    case s"$pairStr -> $inserStr" => (pairStr(0), pairStr(1)) -> inserStr(0)
    case _                        => throw new Exception(s"Cannot parse '$line' as an insertion rule")

def applyRules(polymer: List[Char], rules: InsertionRules): List[Char] =
  val pairs = polymer.zip(polymer.tail)
  val insertionsAndSeconds =
    for pair @ (first, second) <- pairs
      yield rules(pair) :: second :: Nil
  polymer.head :: insertionsAndSeconds.flatten

def part2(input: String): Int =
  val (initialPolymer, insertionRules) = parseInput(input)
  ???
