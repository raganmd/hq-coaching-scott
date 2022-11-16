#include "_includes"

// Example Pixel Shader
// uniform float exampleUniform;

out vec4 fragColor;
void main()
{
	float L = texture(sTD2DInputs[0], pL).x;
	float R = texture(sTD2DInputs[0], pR).x;
	float T = texture(sTD2DInputs[0], pT).x;
	float B = texture(sTD2DInputs[0], pB).x;

	float curl = R - L - T + B;
	curl *= 0.5;

	vec4 color = vec4(curl , 0, 0, 1.0);
	fragColor = TDOutputSwizzle(color);
}
