function Icon({ id, strokeWidth = 2, size, width, height, className, ...otherProps }: any) {
    return (
      <svg
        className={className}
        {...otherProps}
        width={width ?? size}
        height={height ?? size}
        strokeWidth={strokeWidth}
      >
        <use href={`/sprites.svg#${id}`} />
      </svg>
    );
  }
  
  export default Icon;
  