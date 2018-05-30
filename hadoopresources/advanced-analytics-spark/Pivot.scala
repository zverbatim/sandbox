import org.apache.spark.sql.DataFrame
import org.apache.spark.sql.functions.first

case class MatchData(
                      id_1: Int,
                      id_2: Int,
                      cmp_fname_c1: Option[Double],
                      cmp_fname_c2: Option[Double],
                      cmp_lname_c1: Option[Double],
                      cmp_lname_c2: Option[Double],
                      cmp_sex: Option[Int],
                      cmp_bd: Option[Int],
                      cmp_bm: Option[Int],
                      cmp_by: Option[Int],
                      cmp_plz: Option[Int],
                      is_match: Boolean
                    )

def pivotSummary(desc: DataFrame): DataFrame = {
  val schema = desc.schema
  import desc.sparkSession.implicits._

  var lf = desc.flatMap(row => {
    val metric = row.getString(0)
    (1 until row.size).map(i => {
      (metric, schema(i).name, row.getString(i).toDouble)
    })
  }).toDF("metric", "field", "value")

  print(lf.printSchema())

  lf.groupBy("field")
    .pivot("metric", Seq("count", "stddev", "min", "max", "mean"))
    .agg(first("value"))


}

case class Score(value: Double ) {
  def +(oi: Option[Double]) = {
    println ("oi" + oi)
    Score(value + oi.getOrElse(0.0))
  }
}

def scoreMatchData(md: org.apache.spark.sql.Row): Double = {
  Score(md.getDouble(4) + md.getInt(10) + md.getInt(9) + md.getInt(7) + md.getInt(8)).value
}

def crossTab(scored: DataFrame, t:Double): DataFrame = {
  scored
    .selectExpr(s"score >=$t as above", "is_match")
    .groupBy("above")
    .pivot("is_match", Seq("true", "false"))
    .count()
}

