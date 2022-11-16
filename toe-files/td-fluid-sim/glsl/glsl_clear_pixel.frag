uniform float uClear;

// Example Pixel Shader
// uniform float exampleUniform;

out vec4 fragColor;
void main()
{
	vec4 color = uClear * texture(sTD2DInputs[0], vUV.st);
	fragColor = TDOutputSwizzle(color);
}
