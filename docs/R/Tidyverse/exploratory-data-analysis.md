# 🧭 Exploratory Data Analysis (EDA)

## EDA is an iterative cycle.

* Generate questions about the data
* Search for answers by visualizing, transforming and modeling
* Use the results to learn and refine the questions

## Tools of EDA

* Visualization
* Transformation
* Modeling

## Two general types of questions

1. What type of variation occurs within the variables?
2. What type of covariation occurs between the variables?

## Visualizing distributions
### Categorical variables

Categorical variables are usually saved as factors or character vectors.

```r
# plot the distribution
ggplot(data = diamonds) +
    geom_bar(aes(x = cut))
```

```r
# histogram values
diamonds %>%
    count(cut)
```

```r
# histogram with custom binwith
ggplot(data = diamonds) +
    geom_histogram(aes(x = carat), binwith = 0.5)
```

```r
# histogram values with custom binwith
diamonds %>%
    count(cut_with(carat, 0.5))
```

#### Outliers

Outliers are observations that are unusual

```r
# zoom into small values of the y- and x-axis
ggplot(data = diamonds) +
    geom_histogram(aes(x = carat)) +
    coord_cartesian(ylim = c(0, 50), xlim = c(0, 20))
```

```r
# get the values of the outliers
outlier <- diamonds %>%
    filter(y < 3 | x > 20) %>%
    arrange(y)
```

#### Missing values

```r
# Drop the entire row of the outlier
diamonds <- diamonds %>%
    filter(between(y, 3, 20))
```

The prefered way is to replace the outlier with NA

```r
# replace the value of outlier with NA
diamonds <- diamonds %>%
    mutate(y = ifelse(y < 3 | y > 20, NA, y))
```

```r
# supress warning of ggplot
ggplot(data = diamonds) +
    geom_point(aes(x = x, y = y), na.rm = TRUE)
```
### Continuous variables

```r
# frequency of continuous variable
ggplot(data = diamonds, aes(x = price)) +
    geom_freqpoly(aes(color = cut), binwith = 500)
```

```r
# density of continuous variable
ggplot(
    data = diamonds,
        aes(x = price, y = ..density..)
    ) +
    geom_freqpoly(aes(color = cut), binwith = 500)
```

```r
# boxplot across multiple categories
ggplot(data = mpg, aes(x = class, y = hwy)) +
    geom_boxplot()
```

```r
# boxplot reorder by median and rotate the chart
ggplot(data = mpg) +
    geom_boxplot(
        aes(
            x = reorder(class, hwy, FUN = median)
            y = hwy
        )
    ) +
    coord_flip()
```

If the size of the data set grows use alpha aesthetic for the transparency of overlapping points

```r
# add transparency to overlapping points
ggplot(data = diamonds) +
    geom_point(
        aes(
            x = reorder(class, hwy, FUN = median)
            y = hwy
        ),
        alpha = 1 / 100
    ) +
    coord_flip()
```