export default /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	#ifdef VIEW_ID

		// the clipping planes are projected with the multiview camera, not with this view's eye
		vClipPosition = - ( clipViewMatrices[ VIEW_ID ] * mvPosition ).xyz;

	#else

		vClipPosition = - mvPosition.xyz;

	#endif

#endif
`;
