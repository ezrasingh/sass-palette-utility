## Documentation

### Create Palette

```scss
// Returns a map of colors for the UI's palette
@function new-palette(
	$dark,
	$light,
	$brand,
	$interactive,
	$contrast
)
```

```scss
// Example usage
$palette: new-palette(
	$dark: #272838,
	$light: #fffafa,
	$brand: #8884ff,
	$interactive: #ff88dc,
	$contrast: 10
);
```

> To learn more about the underlying palette map structure, check out [`lib/palette.scss`](lib/palette.scss)

### Apply Palette Color

```scss
// Returns color from palette swatch
@function ui-color(
	$palette,
	$swatch-key,
	$color-key: 'base'
)
```

```scss
// Example usage
.container{
	&:nth-child(1){
		// default color key is base color
		background: ui-color($palette, "brand")
	}
	&:nth-child(2){
		background: ui-color($palette, "interactive")
	}
	&:nth-child(3){
		background: ui-color($palette, "layout", "dark")
	}
	&:nth-child(4){
		background: ui-color($palette, "accent", "light")
	}
}
```

### Apply Lightness Swatches

```scss
// Returns light color from palette swatch
@function ui-color-light(
	$palette,
	$swatch-key
)
```
```scss
// Returns lighter color from palette swatch
@function ui-color-lighter(
	$palette,
	$swatch-key
)
```

```scss
// Example usage
.container{
	&:nth-child(1){
		background: ui-color-light($palette, "brand")
	}
	&:nth-child(2){
		background: ui-color-light($palette, "interactive")
	}
	&:nth-child(3){
		background: ui-color-lighter($palette, "brand")
	}
	&:nth-child(4){
		background: ui-color-lighter($palette, "interactive")
	}
}
```

### Apply Darkness Swatches

```scss
// Returns dark color from palette swatch
@function ui-color-light(
	$palette,
	$swatch-key
)
```

```scss
// Returns darker color from palette swatch
@function ui-color-darker(
	$palette,
	$swatch-key
)
```

```scss
// Example usage
.container{
	&:nth-child(1){
		background: ui-color-dark($palette, "brand")
	}
	&:nth-child(2){
		background: ui-color-dark($palette, "interactive")
	}
	&:nth-child(3){
		background: ui-color-darker($palette, "brand")
	}
	&:nth-child(4){
		background: ui-color-darker($palette, "interactive")
	}
}
```

### Apply Layout Swathes

```scss
// Returns layout color from palette swatch
@function ui-layout(
	$palette,
	$swatch-key
)
```

```scss
// Example usage
.container{
	&:nth-child(1){
		background: ui-layout($palette, "light")
	}
	&:nth-child(2){
		background: ui-layout($palette, "dark")
	}
}
```

### Apply Accent Swathes

```scss
// Returns accent color from palette swatch
@function ui-accent(
	$palette,
	$swatch-key
)
```

```scss
// Example usage
.container{
	&:nth-child(1){
		background: ui-accent($palette, "light")
	}
	&:nth-child(2){
		background: ui-accent($palette, "dark")
	}
}
```
