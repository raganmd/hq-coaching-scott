#include "_includes"

out vec4 fragColor;
void main()
{
	float L = texture(sTD2DInputs[0], pL).x;
	float R = texture(sTD2DInputs[0], pR).x;
	float T = texture(sTD2DInputs[0], pT).x;
	float B = texture(sTD2DInputs[0], pB).x;
	float C = texture(sTD2DInputs[0], vUV.st).x;

	float divergence = texture(sTD2DInputs[1], vUV.st).x;
	float pressure = (L + R + T + B - divergence) * 0.25;

	vec4 color = vec4(pressure, 0.0, 0.0, 1.0);
	fragColor = TDOutputSwizzle(color);
}