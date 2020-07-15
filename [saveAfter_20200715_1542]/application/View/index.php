<div class="container">
	<header></header>
	<div class="contents">
		<section class="topMenuSection">
	        <a href="javascript:hamburgerPop();" class="hamBtn"></a>
			 <span class="titleText">실시간측정</span>
			<!-- <span class="dateText"><?=date('Y. m. d')?></span> -->
		</section>
		<section class="listSection mainListSect">
			<ul class="listGroup">
				<?php
				if($arr_sensor){
					foreach($arr_sensor as $sensor => $values) {

				?>
				<li>
					<div class="titleCase">
						<div><?=$sensor?></div>
						<div><?=$values['subTitle']?></div>
					</div>
					<div class="infoCase statusSort"><?=$values['status']?></div>
					<a href="<?=$record ? "/main/status/" . urlencode($sensor) : "javascript:alert('측정된 기록이 없습니다.');"?>" class="linkCover"></a>
				</li>
				<?php }} ?>
			</ul>
		</section>
	</div>
	<div class="bottomTimeCheck">
		<span class="fs16 fw_bold">마지막 측정시간 : </span>
		<span class="fs16 fm_mon"><?=$record ? date("Y-m-d H:i:s", strtotime("20" . substr($record, 0, 12))) : "0000-00-00 00:00:00"?></span>
	</div>
</div>
<input type="hidden" name="record" value="<?=$record?>">
<script src="/js/index.js"></script>
