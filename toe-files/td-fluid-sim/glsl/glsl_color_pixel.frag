// Example Pixel Shader
// uniform float exampleUniform;

uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspectRatio;

out vec4 fragColor;
void main()
{

	// delta between current UV and uPoint;
	vec2 p = vUV.xy - uPoint;

	// account for aspect
	p.x *= uAspectRatio;

	//splat - a circle this is really an SDF
	vec3 splat = exp(-dot(p, p) / uRadius) * uColor;

	// input color
	vec3 baseColor = texture(sTD2DInputs[0], vUV.st).rgb;

	vec4 color = vec4(baseColor + splat, 1.0);
	fragColor = TDOutputSwizzle(color);
}
