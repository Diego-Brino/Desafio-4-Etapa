package com.api.scilink.repositories;

import com.api.scilink.models.RedeSocialModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RedeSocialRepository extends JpaRepository<RedeSocialModel, Integer> {
}
