package com.gemzi.jewellery.repository;

import com.gemzi.jewellery.model.Jewellery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JewelleryRepository extends JpaRepository<Jewellery, Long> {
}
