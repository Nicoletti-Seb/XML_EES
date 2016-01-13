<?xml version="1.0" encoding="iso-8859-1"?>

<xsl:stylesheet version="1.0" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- Page layout information -->

	<xsl:template match="/">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">

			<fo:layout-master-set>
				<fo:simple-page-master master-name="main" page-height="29.7cm" page-width="21cm" font-family="sans-serif" margin-top="0.5cm" margin-bottom="1cm" margin-left="2cm" margin-right="2cm">
					<fo:region-body margin-top="4.0cm" margin-bottom="1cm" />
					<fo:region-before extent="1.5cm" />
				</fo:simple-page-master>
			</fo:layout-master-set>

			<fo:page-sequence master-reference="main">
				<fo:flow flow-name="xsl-region-body" >
				<xsl:apply-templates select="persons/person" />
				<xsl:apply-templates select="persons" />
				</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template> 

	<xsl:template match="persons/person">
		<fo:block>
		Hello <xsl:value-of select="name" />
		</fo:block>  
	</xsl:template>

	<xsl:template match="persons">
		<fo:block>
				 <fo:instream-foreign-object>
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body" width="450" height="500" xml:space="preserve" viewBox="0 0 450 500">
				    <title>Bar tile</title>

				    <g id="barChart" transform="translate(40, 100)" fill-rule="evenodd" clip-rule="evenodd" stroke="none" class="legend"
				        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" style="text-anchor:start">

				        <g id="GridAndLegend" style="stroke:none;">
				            <g stroke="black">

				                <!-- axis lines -->
				                <path d="M 27,240 h  316"/>
				                <path d="M 27,240 v -224"/>


				                <!-- category axis major ticks -->
				                <path d="M  27,245 v -5"/>
				                <path d="M 106,245 v -5"/>
				                <path d="M 185,245 v -5"/>
				                <path d="M 264,245 v -5"/>

				                <!-- value axis minor ticks -->
				                <path d="M 22,240 h 5"/>
				                <path d="M 22,202 h 5"/>
				                <path d="M 22,165 h 5"/>
				                <path d="M 22,127 h 5"/>
				                <path d="M 22, 90 h 5"/>
				                <path d="M 22, 53 h 5"/>
				                <path d="M 22, 15 h 5"/>
				            </g>

				            <text transform="matrix(1 0 0 1 54  256)">Shoe</text>
				            <text transform="matrix(1 0 0 1 142 256)">Car</text>
				            <text transform="matrix(1 0 0 1 211 256)">Travel</text>
				            <text transform="matrix(1 0 0 1 285 256)">Computer</text>

				            <text transform="matrix(1 0 0 1 13 247)"><tspan x="0" y="0">0</tspan></text>
				            <text transform="matrix(1 0 0 1  6 209)"><tspan x="0" y="0">10</tspan></text>
				            <text transform="matrix(1 0 0 1  6 171)"><tspan x="0" y="0">20</tspan></text>
				            <text transform="matrix(1 0 0 1  6 134)"><tspan x="0" y="0">30</tspan></text>
				            <text transform="matrix(1 0 0 1  6  96)"><tspan x="0" y="0">40</tspan></text>
				            <text transform="matrix(1 0 0 1  6  60)"><tspan x="0" y="0">50</tspan></text>
				            <text transform="matrix(1 0 0 1  6  22)"><tspan x="0" y="0">60</tspan></text>
				        </g>

				        <g id="ShoeBar">
				            <path style="fill:#7575C3;" d="M  47,203 v   37 h 39 v  -37 H  47 z"/>
				        </g>
				        <g id="CarBar">
				            <path style="fill:#7575C3;" d="M 126,166 v   74 h 39 v  -74 h -39 z"/>
				        </g>
				        <g id="TravelBar">
				            <path style="fill:#7575C3;" d="M 205,203 v   37 h 39 v  -37 h -39 z"/>
				        </g>
				        <g id="ComputerBar">
				            <path style="fill:#7575C3;" d="M 284, 16 v  224 h 39 v -224 h -39 z"/>
				        </g>

				    </g>

				</svg>
			</fo:instream-foreign-object>
        </fo:block>
      </xsl:template>
</xsl:stylesheet>
